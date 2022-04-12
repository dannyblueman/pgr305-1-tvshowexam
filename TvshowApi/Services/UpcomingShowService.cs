using MongoDB.Driver;
using TvshowApi.Models;
using TvshowApi.DatabaseSettings;
using System.Linq;
using System.Collections.Generic;

namespace TvshowApi.Services
{
    public class UpcomingShowService
    {
        private readonly IMongoCollection<UpcomingShow> _upcomingShows;

        public UpcomingShowService(IUpcomingShowDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _upcomingShows = database.GetCollection<UpcomingShow>( 
                settings.UpcomingShowCollectionName 
            );
        }

        public List<UpcomingShow> Get()
        {
            return _upcomingShows.Find( upcomingShow => true ).ToList();
        }

        public UpcomingShow Get(string id){
            return _upcomingShows.Find<UpcomingShow>( upcomingShow => upcomingShow.Id == id ).FirstOrDefault();
        }

        public UpcomingShow Create(UpcomingShow newUpcomingShow)
        {
            _upcomingShows.InsertOne( newUpcomingShow );
            return newUpcomingShow;
        }

        public void Update(string id, UpcomingShow upcomingShowIn){
            _upcomingShows.ReplaceOne( upcomingShow => upcomingShow.Id == upcomingShowIn.Id, upcomingShowIn );
        }

        public void Remove(string id){
            _upcomingShows.DeleteOne( upcomingShow => upcomingShow.Id == id );
        }

    }
}
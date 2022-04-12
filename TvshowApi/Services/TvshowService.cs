using MongoDB.Driver;
using TvshowApi.Models;
using System.Collections.Generic;
using System.Linq;
using TvshowApi.DatabaseSettings;

namespace TvshowApi.Services
{
    public class TvshowService
    {
        private readonly IMongoCollection<Tvshow> _tvshows;

        public TvshowService(ITvshowDatabaseSettings settings)
        {
            var client = new MongoClient( settings.ConnectionString );
            var database = client.GetDatabase( settings.DatabaseName );
            _tvshows = database.GetCollection<Tvshow>(
                settings.TvshowCollectionName
            );
        }

        public List<Tvshow> GetTvshows()
        {
            return _tvshows.Find( tvshow => true ).ToList();
        }
    }
}
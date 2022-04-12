using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TvshowApi.Interfaces;

namespace TvshowApi.Models
{
    public class UpcomingShow : IUpcomingShow
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }
}
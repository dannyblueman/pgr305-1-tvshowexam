using TvshowApi.Interfaces;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TvshowApi.Models
{
    public class Tvshow : ITvshow
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Show { get; set; }
        public List<Star> Stars { get; set; }
    }
}
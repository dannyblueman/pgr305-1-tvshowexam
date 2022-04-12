using System.Collections.Generic;
using TvshowApi.Models;

namespace TvshowApi.Interfaces
{
    public interface ITvshow
    {
        string Id { get; set; }
        string Show { get; set; }
        List<Star> Stars { get; set; }
    }
}
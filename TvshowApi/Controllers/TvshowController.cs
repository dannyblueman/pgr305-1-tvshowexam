using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TvshowApi.Models;
using TvshowApi.Services;

namespace TvshowApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TvshowController : ControllerBase
    {
        private readonly TvshowService _tvshowService;

        public TvshowController(TvshowService tvshowService)
        {
            _tvshowService = tvshowService;
        }

        [HttpGet]
        public IEnumerable<Tvshow> Get()
        {
            return _tvshowService.GetTvshows();
        }
    }
}
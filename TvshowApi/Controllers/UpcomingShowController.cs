using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TvshowApi.Interfaces;
using TvshowApi.Models;
using TvshowApi.Services;

namespace TvshowApi.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class UpcomingShowController : ControllerBase
    {
        private readonly UpcomingShowService _upcomingShowService;

        public UpcomingShowController(UpcomingShowService upcomingShowService)
        {
            _upcomingShowService = upcomingShowService;
        }

        [HttpGet]
        public IEnumerable<UpcomingShow> Get()
        {
            return _upcomingShowService.Get();
        }

        [HttpPost]
        public UpcomingShow Post(UpcomingShow newUpcomingShow)
        {
            return _upcomingShowService.Create( newUpcomingShow );
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Put(string id, UpcomingShow upcomingShowIn){
            var upcomingShow = _upcomingShowService.Get(id);

            if(upcomingShow == null){
                return NotFound();
            }

            _upcomingShowService.Update(id, upcomingShowIn);
            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id){
            var upcomingShow = _upcomingShowService.Get(id);

            if( upcomingShow == null ){
                return NotFound();
            }

            _upcomingShowService.Remove( upcomingShow.Id );
            return NoContent();
        }
    }
}
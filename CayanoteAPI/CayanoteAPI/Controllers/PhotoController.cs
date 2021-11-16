using CayanoteAPI.Models;
using CayanoteAPI.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace CayanoteAPI.Controllers
{
    [ApiController]
    [Route("Photo")]
    public class PhotoController : ControllerBase
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly IUnsplashService _unsplashService;
        
        public PhotoController(IUnsplashService unsplashService, IHttpClientFactory clientFactory)
        {
            _unsplashService = unsplashService;
            _clientFactory = clientFactory;
        }

        [HttpGet]
        public async Task Get()
        {
            var client = _clientFactory.CreateClient();
            //var result = await client.
        }
        /*public async Task<UnsplashResponse> GetPhotos()
        {
            return await _unsplashService.GetUnsplashCollection();
        }*/
    }
}

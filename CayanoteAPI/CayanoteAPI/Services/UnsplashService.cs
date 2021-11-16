using CayanoteAPI.Models;
using System.Collections;
using System.Text.Json;
using System.Net.Http;
namespace CayanoteAPI.Services
{
    public class UnsplashService : IUnsplashService
    {
        private readonly IHttpClientFactory _clientFactory;
        
        public UnsplashService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<UnsplashResponse> GetUnsplashCollection()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, "https://api.unsplash.com/photos/random?client_id=pNAsDh1g8yYEyfu7HLPgZBw_qHgsqWIG3vhhCaNWJDk&count=20&collections=327760");
            request.Headers.Add("Accept-Version", "v1");

            var client = _clientFactory.CreateClient();
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var res = await response.Content.ReadAsStreamAsync();
                return await JsonSerializer.DeserializeAsync<UnsplashResponse>(res);
            }
            else
            {
                return null;
            }

        }
    }
    
}

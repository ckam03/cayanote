using CayanoteAPI.Models;
using System.Collections;

namespace CayanoteAPI.Services
{
    public interface IUnsplashService
    {
        Task<UnsplashResponse> GetUnsplashCollection();
     
    }
}

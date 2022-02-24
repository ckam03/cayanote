namespace CayanoteAPI.Models
{
    public record UnsplashResponse
    {
        public string Author { get; init; } = String.Empty;
        public string Location { get; init; } = String.Empty;
        public string Url { get; init; } = String.Empty;
    }
}

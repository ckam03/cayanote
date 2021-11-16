namespace CayanoteAPI.Models
{
    public record Note
    {
        public int Id { get; init; }
        public string? Name { get; set; }
        public string? Color { get; set; }
        public string? Content { get; set; }
    }
}

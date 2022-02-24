namespace CayanoteAPI.Models
{
    public record Note
    {
        public int Id { get; init; }
        public string Name { get; set; } = String.Empty;
        public string Color { get; set; } = String.Empty;
        public string Content { get; set; } = String.Empty;
    }
}

namespace CayanoteAPI.Models
{
    public class Container
    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public Dictionary<int, string>? Components { get; set; }
    }
}

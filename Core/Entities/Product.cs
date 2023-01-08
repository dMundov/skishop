namespace Core.Entities
{
    public class Product
    {
        public Product()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        
        public string Id { get; set; }
        public string Name { get; set; }
    }
}
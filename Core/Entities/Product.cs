namespace Core.Entities
{
    using System.ComponentModel.DataAnnotations.Schema;

    public class Product : BaseEntity
    {     
        public string Name { get; set; }
        
        public string Description { get; set; }
        
        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public string PictureUrl { get; set; }

        public ProductType ProductType { get; set; }
        
        public int ProductTypeId { get; set; }
        
        public ProductBrand ProductBrand { get; set; }
        
        public int ProductBrandId { get; set; }
    }   
}
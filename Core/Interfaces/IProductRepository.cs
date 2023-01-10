namespace Core.Interfaces
{
    using Core.Entities;
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(Guid id);
        Task<IReadOnlyList<Product>> GetProductsAsync();
        Task<IReadOnlyList<ProductBrand>> GetProductBrandsAsync();
        Task<IReadOnlyList<ProductType>> GetProductsTypesAsync();


    }
}
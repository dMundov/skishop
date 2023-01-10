namespace Core.Interfaces
{
    using Core.Entities;
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(string id);
        Task<IReadOnlyList<Product>> GetProductsAsync();

    }
}
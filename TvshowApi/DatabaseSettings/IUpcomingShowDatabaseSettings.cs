namespace TvshowApi.DatabaseSettings
{
    public interface IUpcomingShowDatabaseSettings
    {
        string UpcomingShowCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class UpcomingShowDatabaseSettings : IUpcomingShowDatabaseSettings
    {
        public string UpcomingShowCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
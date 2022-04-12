namespace TvshowApi.DatabaseSettings
{
    public interface ITvshowDatabaseSettings
    {
        string TvshowCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

    public class TvshowDatabaseSettings : ITvshowDatabaseSettings
    {
        public string TvshowCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
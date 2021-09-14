const Api = () => {
    const { data, error, isLoading, setUrl } = UseFetch();
    console.log(data);

    return (
        <Container className="App">
            <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=5&appid=${API_KEY}`)} />

            {/* conditionally render  */}
            {data && <WeatherList weathers={data.list} />}
        </Container>
    );
};

export default Api;
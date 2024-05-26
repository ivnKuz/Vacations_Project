class AppConfig {
    public baseUrl = 'http://localhost:3001/api';
    public signUpUrl = `${this.baseUrl}/signUp`
    public loginUrl = `${this.baseUrl}/login`
    public VacationsUrl = `${this.baseUrl}/vacations`
    public getVacationsCSV = `${this.baseUrl}/vacations/csv`
    public getChartReport = `${this.baseUrl}/vacations/report`
    public getAllFollowers = `${this.baseUrl}/followers`
    public getFollowersCount = `${this.baseUrl}/followersCount`
    public deleteVacation = `${this.baseUrl}/vacations/delete`
    public FollowUrl = `${this.baseUrl}/followed`
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;
class AppConfig {
    public baseUrl = 'http://localhost:8080/api';
    public signUpUrl = `${this.baseUrl}/signUp`
    public loginUrl = `${this.baseUrl}/login`
    public getAllVacationsUrl = `${this.baseUrl}/vacations`
    public getAllFollowers = `${this.baseUrl}/followers`
    public getFollowersCount = `${this.baseUrl}/followersCount`
    public FollowUrl = `${this.baseUrl}/followed`
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;
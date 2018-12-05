package UYPDatabase.site.common.AllDto;

public class LoginDto {
    String firstName;
    String lastName;
    Boolean loginSuccess;

    public LoginDto() {
        this.loginSuccess = false;
    }

    public LoginDto(String firstName, String lastName, Boolean loginSuccess) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.loginSuccess = loginSuccess;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Boolean getLoginSuccess() {
        return loginSuccess;
    }

    public void setLoginSuccess(Boolean loginSuccess) {
        this.loginSuccess = loginSuccess;
    }

    @Override
    public String toString() {
        return "LoginDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", loginSuccess=" + loginSuccess +
                '}';
    }
}

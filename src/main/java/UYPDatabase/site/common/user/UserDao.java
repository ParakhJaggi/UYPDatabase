package UYPDatabase.site.common.user;


import UYPDatabase.site.common.AllDto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class UserDao {

    public LoginDto login(String username, String password){
        LoginDto temp = new LoginDto(username, password, "user", true);
        System.out.println("User is trying to login with username " + username + " and password " + password);
        return temp;
    }

    public UserDto getUserDetails(String username){
        System.out.println("trying to get info from " + username);
        UserDto temp = new UserDto();
        temp.setPrincipal("test@test.com");
        temp.setFirstName("Parakh");
        temp.setUserType("user");
        return temp;
    }

    public void updateUser(LoginDto loginDto){
        System.out.println("I should update the user!!!!");
    }

}



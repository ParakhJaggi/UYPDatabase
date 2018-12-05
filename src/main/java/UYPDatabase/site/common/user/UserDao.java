package UYPDatabase.site.common.user;


import UYPDatabase.site.common.AllDto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class UserDao {

    public LoginDto login(String username, String password){
        LoginDto temp = new LoginDto(username, password, true);
        System.out.println("User is trying to login with username " + username + " and password " + password);
        return temp;
    }

    public UserDto getUserDetails(String username){
        System.out.println("trying to get info from " + username);
        UserDto temp = new UserDto();
        temp.setFirstName("Parakh");
        temp.setUserType("admin");
        return temp;
    }

}



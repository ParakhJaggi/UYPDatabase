package UYPDatabase.site.common.user;


import UYPDatabase.site.JDBC;
import UYPDatabase.site.common.AllDto.LoginDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;


@Repository
public class UserDao {

    public LoginDto login(String username, String password){
        LoginDto temp = new LoginDto(username, password, "user", true);
        System.out.println("User is trying to login with username " + username + " and password " + password);
        return temp;
    }

    public UserDto getUserDetails(String username) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getUserDetails(username);

    }

    public void updateUser(UserDto userDto){
        System.out.println("I should update the user with this info");
        System.out.println(userDto);
    }

}



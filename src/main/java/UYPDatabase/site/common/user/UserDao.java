package UYPDatabase.site.common.user;


import UYPDatabase.site.JDBC;
import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.ArrayList;


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

    public UserNameListDto getPossibleApplicants(){
        UserNameListDto temp = new UserNameListDto();
        ArrayList<String> myList = temp.getUsernameList();
        myList.add("Carl");
        myList.add("Steve");
        temp.setUsernameList(myList);
        System.out.println(myList);
        System.out.println("Give me all of the usernames for people not accepted");
        return temp;
    }

    public void acceptApplicant(String username){
        System.out.println("Accept the applicant with username " + username);
    }

}



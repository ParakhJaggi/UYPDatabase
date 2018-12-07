package UYPDatabase.site.common.user;


import UYPDatabase.site.JDBC;
import UYPDatabase.site.common.AllDto.ClassDto;
import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import com.mailjet.client.errors.MailjetException;
import com.mailjet.client.errors.MailjetSocketTimeoutException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.ArrayList;


@Repository
public class UserDao {

    public LoginDto login(String username, String password) throws SQLException, ClassNotFoundException {
        LoginDto temp = new LoginDto(username, password, "user", true);
        JDBC j = new JDBC();
        return j.login(username,password);
    }

    public UserDto getUserDetails(String username) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getUserDetails(username);
    }

    public void updateUser(UserDto userDto) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        j.updateuser(userDto);
    }

    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getPossibleApplicants();
    }

    public void acceptApplicant(String username, String authorizedPerson) throws SQLException, ClassNotFoundException, MailjetSocketTimeoutException, MailjetException {
        System.out.println("Accept the applicant with username " + username + " authorized by " + authorizedPerson);
        JDBC j = new JDBC();
        j.acceptApplicant(username,authorizedPerson);
    }


    public ClassDto getNotMyClasses(String username) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getNotMyClasses(username);
    }

    public void registerClass(String username, int id) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        j.registerClass(username,id);
    }

    public ClassDto getMyClasses(String username) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getMyClasses(username);
    }

    public void dropClass(String username, Integer classID) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        j.dropClass(username,classID);
    }

    public void updateApplicant(UserDto userDto) throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        j.updateApplicant(userDto);
    }

    public UserNameListDto getRegisteredUsers() throws SQLException, ClassNotFoundException {
        JDBC j = new JDBC();
        return j.getUsers();
    }

    public UserDto getUserExtraDetails() throws SQLException, ClassNotFoundException{
        //gimme gimme
        UserDto temp = new UserDto();
        return temp;
    }

}



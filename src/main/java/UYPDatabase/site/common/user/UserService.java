package UYPDatabase.site.common.user;

import java.sql.SQLException;
import java.util.List;

import UYPDatabase.site.common.AllDto.ClassDto;
import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import UYPDatabase.site.common.user.UserDao;
import com.mailjet.client.errors.MailjetException;
import com.mailjet.client.errors.MailjetSocketTimeoutException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public LoginDto login(String username, String password) throws SQLException, ClassNotFoundException {
        return userDao.login(username, password);
    }

    public UserDto getUserDetails(String username) throws SQLException, ClassNotFoundException {
        return userDao.getUserDetails(username);
    }

    public void updateUser(UserDto userDto) throws SQLException, ClassNotFoundException {
        userDao.updateUser(userDto);
    }

    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        return userDao.getPossibleApplicants();
    }

    public void acceptApplicant(String username, String authorizedPerson) throws SQLException, ClassNotFoundException, MailjetSocketTimeoutException, MailjetException {
        userDao.acceptApplicant(username, authorizedPerson);
    }

    public void updateApplicant(UserDto userDto) throws SQLException, ClassNotFoundException {
        userDao.updateApplicant(userDto);
    }

    public ClassDto getClasses(String username) throws SQLException, ClassNotFoundException {
        return userDao.getClasses(username);
    }

    public void registerClass(String username, Integer classID) throws SQLException, ClassNotFoundException {
        userDao.registerClass(username, classID);
    }

    public ClassDto getMyClasses(String username) throws SQLException, ClassNotFoundException {
        return userDao.getMyClasses(username);
    }

    public void dropClass(String username, Integer classID){
        userDao.dropClass(username, classID);
    }

    public UserNameListDto getUsers() throws SQLException, ClassNotFoundException {
        return userDao.getUsers();
    }
}


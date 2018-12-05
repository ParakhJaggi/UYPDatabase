package UYPDatabase.site.common.user;

import java.sql.SQLException;
import java.util.List;

import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public LoginDto login(String username, String password){
        return userDao.login(username, password);
    }

    public UserDto getUserDetails(String username) throws SQLException, ClassNotFoundException {
        return userDao.getUserDetails(username);
    }

    public void updateUser(UserDto userDto) throws SQLException, ClassNotFoundException {
        userDao.updateUser(userDto);
    }
}


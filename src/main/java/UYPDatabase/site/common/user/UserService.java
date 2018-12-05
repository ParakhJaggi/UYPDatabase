package UYPDatabase.site.common.user;

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

    public UserDto getUserDetails(String username){
        return userDao.getUserDetails(username);
    }
}


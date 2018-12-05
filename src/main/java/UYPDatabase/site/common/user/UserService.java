package UYPDatabase.site.common.user;

import java.util.List;

import UYPDatabase.site.common.user.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    @Autowired
    private UserDao userDao;

}


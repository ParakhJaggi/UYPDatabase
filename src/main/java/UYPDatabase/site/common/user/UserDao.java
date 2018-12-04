package UYPDatabase.site.common.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Created by jlutteringer on 8/23/17.
 */
@Repository
public class UserDao {

    public void apply(UserDto userDto){
        System.out.println("Guest is applying!!!!");
    }

}



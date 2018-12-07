package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.AllDto.ClassDto;
import UYPDatabase.site.common.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
@RequestMapping("/api/class")
public class ClassEndpoint {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/")
    public ClassDto getClasses() throws SQLException, ClassNotFoundException {
        return userService.getClasses();
    }

    @PostMapping(value = "/register")
    public void registerClass(@RequestBody String username, @RequestBody Integer classID){
        userService.registerClass(username, classID);
    }
}

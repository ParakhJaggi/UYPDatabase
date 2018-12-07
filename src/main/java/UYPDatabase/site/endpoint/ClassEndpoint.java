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

    @GetMapping(value = "/{username}")
    public ClassDto getClasses(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getClasses(username);
    }

    @PostMapping(value = "/register/{username}/{classID}")
    public void registerClass(@PathVariable("username") String username, @PathVariable("classID") Integer classID) throws SQLException, ClassNotFoundException {
        userService.registerClass(username, classID);
    }

    @PostMapping(value = "/drop/{username}/{classID}")
    public void dropClass(@PathVariable("username") String username, @PathVariable("classID") Integer classID) throws SQLException, ClassNotFoundException {
        userService.dropClass(username, classID);
    }
}

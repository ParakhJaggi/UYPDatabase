package UYPDatabase.site.endpoint;

import UYPDatabase.site.common.AllDto.CSVDto;
import UYPDatabase.site.common.AllDto.ClassDto;
import UYPDatabase.site.common.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.ArrayList;

@RestController
@RequestMapping("/api/class")
public class ClassEndpoint {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/my/{username}")
    public ClassDto getMyClasses(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getMyClasses(username);
    }

    @GetMapping(value = "/not/{username}")
    public ClassDto getNotMyClasses(@PathVariable("username") String username) throws SQLException, ClassNotFoundException {
        return userService.getNotMyClasses(username);
    }

    @PostMapping(value = "/register/{username}/{classID}")
    public void registerClass(@PathVariable("username") String username, @PathVariable("classID") Integer classID) throws SQLException, ClassNotFoundException {
        userService.registerClass(username, classID);
    }

    @PostMapping(value = "/drop/{username}/{classID}")
    public void dropClass(@PathVariable("username") String username, @PathVariable("classID") Integer classID) throws SQLException, ClassNotFoundException {
        userService.dropClass(username, classID);
    }

    @PostMapping(value = "/create-class")
    public void makeClass(@RequestBody ClassDto c) throws SQLException, ClassNotFoundException {
        userService.makeClass(c);
    }

    @GetMapping(value = "/get-csv")
    public ArrayList<ArrayList<String>> getClassCSVData() throws SQLException, ClassNotFoundException {
        System.out.println(userService.getClassCSVData());
        return userService.getClassCSVData();
    }
}

package UYPDatabase.site.common.guest;

import UYPDatabase.site.JDBC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Repository
public class GuestDao {

    public void apply(GuestDto guestDto) throws SQLException, ClassNotFoundException {
        System.out.println("Guest is applying!!!!" + guestDto);
        JDBC j = new JDBC();
        j.addStudent(guestDto);
    }

}



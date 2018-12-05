package UYPDatabase.site;


import UYPDatabase.site.common.guest.GuestDto;

import java.sql.*;

public class JDBC {



    public void DerbyTest() throws Exception {

        Class.forName("com.mysql.jdbc.Driver");
        String connectionUrl = "jdbc:mysql://localhost:3306/uypd?useUnicode=true&characterEncoding=UTF-8&user=root&password=test1234";
        Connection conn = DriverManager.getConnection(connectionUrl);
        ResultSet rs = conn.prepareStatement("show tables").executeQuery();

        while(rs.next()){
            String s = rs.getString(1);
            System.out.println(s);
        }


    }
    public void addStudent(GuestDto guest) throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        String connectionUrl = "jdbc:mysql://localhost:3306/uypd?useUnicode=true&characterEncoding=UTF-8&user=root&password=test1234";
        Connection conn = DriverManager.getConnection(connectionUrl);
        String query = "INSERT INTO `Student` (`firstname`,`middleinitial`,`lastname`,`suffix`,`nameprefered`,`address`,`city`,`state`,`zip`,`birthdate`,`gender`,`race`,`graduationyear`,`email`,`phonenumber`,`sibling`,`previousschool`,`grade`,`parent1firstname`,`parent1lastname`,`parent2firstname`,`parent2lastname`,`gtacceptance`,`password`) VALUES" +
                "('"+guest.getFirstName()+"','"+guest.getMiddleInitial()+"','"+guest.getLastName()+"','suf','namepref','"+guest.getAddressLine()+"','"+guest.getCity()+"','"+guest.getState()+"','"+guest.getZip()+"','2018-01-01','m','race','"+guest.getGraduationYear()+"','"+guest.getEmail()+"','"+guest.getPhoneNumber()+"','"+guest.getSibling()+"','"+guest.getPrevSchool()+"','12','"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getGtAcceptance()+"','"+guest.getPassword()+"');";
        System.out.println(query);
        int rs = conn.prepareStatement(query).executeUpdate();

    }
}

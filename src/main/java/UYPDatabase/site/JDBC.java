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
                "('"+guest.getFirstName()+"','"+guest.getMiddleInitial()+"','"+guest.getLastName()+"','"+guest.getSuffix()+"','"+guest.getPreferredName()+"','"+guest.getAddressLine()+"','"+guest.getCity()+"','"+guest.getState()+"','"+guest.getZip()+"','"+guest.getBirthday()+"','"+guest.getGender()+"','"+guest.getRace()+"','"+guest.getGraduationYear()+"','"+guest.getPrincipal()+"','"+guest.getPhoneNumber()+"','"+guest.getSibling()+"','"+guest.getPrevSchool()+"','12','"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getGtAcceptance()+"','"+guest.getPassword()+"');";
       // System.out.println(query);
        int rs = conn.prepareStatement(query).executeUpdate();

        String getid = "SELECT id FROM Student WHERE email = '"+guest.getPrincipal()+"'; ";

        ResultSet rss = conn.prepareStatement(getid).executeQuery();
        rss.next();
        System.out.println(rss.getString(1));
        String username = guest.getFirstName()+guest.getLastName()+rss.getString(1);

         rs = conn.prepareStatement("UPDATE Student SET username = '"+username+"' WHERE email = '"+guest.getPrincipal()+"'").executeUpdate();




        String q2 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentEmail()+"','"+guest.getParentHomeNumber()+"','"+guest.getParentCellNumber()+"','');";
        //System.out.println(q2);

        rs = conn.prepareStatement(q2).executeUpdate();

        String q3 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getParentEmail2()+"','"+guest.getParentHomeNumber2()+"','"+guest.getParentCellNumber2()+"','');";
        rs = conn.prepareStatement(q3).executeUpdate();
       // System.out.println(q3);


    }
}

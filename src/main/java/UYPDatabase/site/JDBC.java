package UYPDatabase.site;


import UYPDatabase.site.common.AllDto.LoginDto;
import UYPDatabase.site.common.AllDto.UserNameListDto;
import UYPDatabase.site.common.guest.GuestDto;
import UYPDatabase.site.common.user.UserDto;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JDBC {

    public Connection MakeConnection() throws ClassNotFoundException, SQLException {
        Class.forName("com.mysql.jdbc.Driver");
        String connectionUrl = "jdbc:mysql://localhost:3306/uypd?useUnicode=true&characterEncoding=UTF-8&user=root&password=test1234";
        return DriverManager.getConnection(connectionUrl);

    }

    public void DerbyTest() throws Exception {

        Connection conn = this.MakeConnection();
        ResultSet rs = conn.prepareStatement("show tables").executeQuery();

        while(rs.next()){
            String s = rs.getString(1);
            System.out.println(s);
        }


    }
    public void addStudent(GuestDto guest) throws ClassNotFoundException, SQLException {
        System.out.println("test");
        Connection conn =this.MakeConnection();
        String query = "INSERT INTO `Student` (`firstname`,`middleinitial`,`lastname`,`suffix`,`nameprefered`,`address`,`city`,`state`,`zip`,`birthdate`,`gender`,`race`,`graduationyear`,`email`,`phonenumber`,`sibling`,`previousschool`,`grade`,`parent1firstname`,`parent1lastname`,`parent2firstname`,`parent2lastname`,`gtacceptance`,`password`, `expectedschool`) VALUES" +
                "('"+guest.getFirstName()+"','"+guest.getMiddleInitial()+"','"+guest.getLastName()+"','"+guest.getSuffix()+"','"+guest.getPreferredName()+"','"+guest.getAddressLine()+"','"+guest.getCity()+"','"+guest.getState()+"','"+guest.getZip()+"','"+guest.getBirthday()+"','"+guest.getGender()+"','"+guest.getEthnicity()+"','"+guest.getGraduationYear()+"','"+guest.getPrincipal()+"','"+guest.getPhoneNumber()+"','"+guest.getSibling()+"','"+guest.getPrevSchool()+"','12','"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getGtAcceptance()+"','"+guest.getPassword()+"','"+guest.getExpectedSchool()+"');";
        System.out.println(query);
        int rs = conn.prepareStatement(query).executeUpdate();

        String getid = "SELECT id FROM Student WHERE email = '"+guest.getPrincipal()+"'; ";

        ResultSet rss = conn.prepareStatement(getid).executeQuery();
        rss.next();
        System.out.println(rss.getString(1));
        String username = guest.getFirstName()+guest.getLastName()+rss.getString(1);

         rs = conn.prepareStatement("UPDATE Student SET username = '"+username+"' WHERE email = '"+guest.getPrincipal()+"'").executeUpdate();




        String q2 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName()+"','"+guest.getParentLastName()+"','"+guest.getParentEmail()+"','"+guest.getParentHomeNumber()+"','"+guest.getParentWorkNumber()+"','"+guest.getParentCellNumber()+"');";
        //System.out.println(q2);

        rs = conn.prepareStatement(q2).executeUpdate();

        String q3 = "INSERT INTO `parent` (`firstname`,`lastname`,`email`,`homenumber`,`worknumber`,`cellnumber`) VALUES" +
                "('"+guest.getParentFirstName2()+"','"+guest.getParentLastName2()+"','"+guest.getParentEmail2()+"','"+guest.getParentHomeNumber2()+"','"+guest.getParentWorkNumber2()+"','"+guest.getParentCellNumber2()+"');";
        rs = conn.prepareStatement(q3).executeUpdate();
       // System.out.println(q3);

        String q4 = "INSERT INTO `usertype` (`username`,`usertype`) VALUES" +
                " ('"+username+"','guest');";
        rs = conn.prepareStatement(q4).executeUpdate();


    }

    public UserDto getUserDetails(String username) throws ClassNotFoundException, SQLException {

        Connection conn =this.MakeConnection();

        ResultSet rs = conn.prepareStatement("SELECT * FROM Student WHERE username = '"+username+"'").executeQuery();
        rs.next();

         String firstName = rs.getString(1);
         String middleInitial = rs.getString(2);
         String lastName = rs.getString(3);
        String suffix = rs.getString(4);
        String preferredName = rs.getString(5);

        String addressLine = rs.getString(6);
         String city = rs.getString(7);
         String state = rs.getString(8);
         String zip = rs.getString(9);
        String birthday = rs.getString(10);
        String gender = rs.getString(11);
        String ethnicity = rs.getString(12);
        String graduationYear = rs.getString(13);
        String principal = rs.getString(14);

        String phoneNumber = rs.getString(15);
        String sibling = rs.getString(16);
        String prevSchool = rs.getString(17);
        String grade = rs.getString(18);

        String parentFirstName = rs.getString(19);
        String parentLastName = rs.getString(20);
        String parentFirstName2 = rs.getString(21);
        String parentLastName2 = rs.getString(22);
        String gtAcceptance = rs.getString(23);
        String id = rs.getString(24);
        String password = rs.getString(25);
        username = rs.getString(26);
        String expectedSchool = rs.getString(27);


        System.out.println("parent name is " + parentFirstName + " " + parentLastName);
        ResultSet rs2 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '"+parentFirstName+"' AND lastname = '"+parentLastName+"'").executeQuery();
        rs2.next();
        String parentEmail = rs2.getString(3);
        String parentHomeNumber = rs2.getString(4);
        String parentWorkNumber = rs2.getString(5);
        String parentCellNumber = rs2.getString(6);


        ResultSet rs3 = conn.prepareStatement("SELECT * FROM parent WHERE firstname = '"+parentFirstName2+"' AND lastname = '"+parentLastName2+"'").executeQuery();
        rs3.next();
        String parentEmail2 = rs3.getString(3);
        String parentHomeNumber2 = rs3.getString(4);
        String parentWorkNumber2 = rs3.getString(5);
        String parentCellNumber2 = rs3.getString(6);

        ResultSet rs4 = conn.prepareStatement("SELECT * FROM usertype WHERE username = '"+username+"'").executeQuery();
        rs4.next();
        String usertype = rs4.getString(2);


        //guardian 1 info


        //guardian 2 info

        return new UserDto(principal,username,firstName,middleInitial,lastName,addressLine,city,state,zip,phoneNumber,password,prevSchool,graduationYear,expectedSchool,sibling,gtAcceptance,suffix,preferredName,birthday,gender,ethnicity,grade,parentFirstName,parentLastName,parentEmail,parentHomeNumber,parentWorkNumber,parentCellNumber,parentFirstName2,parentLastName2,parentEmail2,parentHomeNumber2,parentWorkNumber2,parentCellNumber2,"idk",usertype);


    }

    public void updateuser(UserDto user) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        int rs = conn.prepareStatement("UPDATE Student SET firstname = '"+user.getFirstName()+"', middleinitial = '"+user.getMiddleInitial()+"' , lastname = '"+user.getLastName()+"', suffix = '"+user.getSuffix()+"' ,nameprefered = '"+user.getPreferredName()+"' , address = '"+user.getAddressLine()+"' , city = '"+user.getCity()+"' , state = '"+user.getState()+"' , zip = '"+user.getZip()+"' , birthdate = '"+user.getBirthday()+"' , gender = '"+user.getGender()+"', race = '"+user.getEthnicity()+"', graduationyear = '"+user.getGraduationYear()+"' , email = '"+user.getPrincipal()+"' , phonenumber = '"+user.getPhoneNumber()+"' ,sibling = '"+user.getSibling()+"' , previousschool = '"+user.getPrevSchool()+"' , grade = '"+user.getGrade()+"' , parent1firstname = '+"+user.getParentFirstName()+"', parent1lastname = '"+user.getParentLastName()+"' , parent2firstname = '"+user.getParentFirstName2()+"', parent2lastname = '"+user.getParentLastName2()+ "' , gtacceptance = '"+user.getGtAcceptance()+"' ,expectedschool = '"+user.getExpectedSchool()+"'  WHERE username = '"+user.getUsername()+"';").executeUpdate();

    }

    public LoginDto login(String username, String password) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        ResultSet rs = conn.prepareStatement("SELECT password, firstname,lastname FROM Student WHERE username = '"+username+"'").executeQuery();
        System.out.println("SELECT password, firstname,lastname FROM Student WHERE username = '"+username+"'");

        rs.next();
        String pass = rs.getString(1);
        String first = rs.getString(2);
        String last = rs.getString(3);
        boolean loggedin = (pass.equals(password));
       if(loggedin){
            ResultSet rs2 = conn.prepareStatement("SELECT usertype FROM usertype WHERE username = '"+username+"'").executeQuery();
            rs2.next();

            System.out.println(first+last+rs2.getString(1));
            return new LoginDto(rs.getString(2),rs.getString(3),rs2.getString(1),true);

        }
       return new LoginDto("","","",false);



    }

    public UserNameListDto getPossibleApplicants() throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        ArrayList<String> temp = new ArrayList<String>();
        String qury = "SELECT * FROM usertype";
        ResultSet rs = conn.prepareStatement(qury).executeQuery();
        while(rs.next()){
            if(rs.getString(2).equals("guest")){
                temp.add(rs.getString(1));
            }
        }
        System.out.println(temp.toString());
        return new UserNameListDto(temp);

    }

    public void acceptApplicant(String usernmae) throws SQLException, ClassNotFoundException {
        Connection conn =this.MakeConnection();
        String q = "UPDATE usertype SET usertype = 'user' WHERE username = '"+usernmae+"' ";
        int rs = conn.prepareStatement(q).executeUpdate();



    }



}


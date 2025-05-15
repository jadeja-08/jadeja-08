 MOBILE APPLICATION DEVELOPMENT LABORATORY 

 1) DISPLAYING HELLO WORLD PROGRAM:

    Code for Main_Activity.Java 
             
        package com.cscorner.displayhelloworld;  
        import android.os.Bundle; 
        import androidx.appcompat.app.AppCompatActivity; 
        import android.widget.TextView; 
         
        public class MainActivity extends AppCompatActivity { 
         
           @Override 
           protected void onCreate(Bundle savedInstanceState) { 
               super.onCreate(savedInstanceState); 
               setContentView(R.layout.activity_main); 
         
               // Find the TextView and set the text 
               TextView helloText = findViewById(R.id.textView); 
               helloText.setText("Hello, World!"); 
           } 
        } 
        

    Code for Activity_main.xml

                    <?xml version="1.0" encoding="utf-8"?> 
                    <LinearLayout 
                       xmlns:android="http://schemas.android.com/apk/res/android" 
                       android:layout_width="match_parent" 
                       android:layout_height="match_parent" 
                       android:gravity="center" 
                       android:orientation="vertical" 
                       android:background="#FFFFFF"> 
                     
                       <TextView 
                           android:id="@+id/textView" 
                           android:layout_width="wrap_content" 
                           android:layout_height="wrap_content" 
                           android:text="Loading..." 
                           android:textSize="24sp" 
                           android:textColor="#000000"/> 
                    </LinearLayout>







2) FONT, FONT SIZE, FONT COLOR CHANGE

    Code for Main_Activity.Java

package com.cscorner.abc; 
import static com.cscorner.abc.R.*; 
import android.annotation.SuppressLint; 
import android.graphics.Color; 
import androidx.appcompat.app.AppCompatActivity; // Updated import 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.TextView; 
public class MainActivity extends AppCompatActivity {
 int ch = 1; 
   float font = 30; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
   final TextView t = findViewById(R.id.textView); 
       Button b1 = findViewById(R.id.button1); 
       Button b2 = findViewById(R.id.button2); 
 
   // Button to change text size 
       b1.setOnClickListener(new View.OnClickListener() { 
           @Override 
           public void onClick(View v) { 
               t.setTextSize(font); 
               font += 5; 
               if (font >= 50) // Fixed condition 
                   font = 30; 
           } 
       }); 
 
// Button to change text color 
       b2.setOnClickListener(new View.OnClickListener() { 
           @Override 
           public void onClick(View v) { 
               switch (ch) { 
                   case 1: 
                       t.setTextColor(Color.RED); 
                       break; 
                   case 2: 
                       t.setTextColor(Color.GREEN); 
                       break; 
                   case 3: 
                       t.setTextColor(Color.BLUE); 
                       break; 
                   case 4: 
                       t.setTextColor(Color.CYAN); 
                       break; 
                   case 5: 
                       t.setTextColor(Color.YELLOW); 
                       break; 
                   case 6: 
                       t.setTextColor(Color.MAGENTA); 
                       break; 
               } 
               ch++; 
               if (ch > 6) // Fixed condition 
             ch = 1; 
                   } 
               }); 
           } 
        } 
   

Code for Activity_main.xml 

<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:orientation="vertical" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent"> 
 
   <TextView 
       android:id="@+id/textView" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:layout_margin="30dp" 
       android:gravity="center" 
       android:text="Hello World!" 
       android:textSize="25sp" 
       android:textStyle="bold" /> 
 
   <Button 
       android:id="@+id/button1" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:layout_margin="20dp" 
       android:gravity="center" 
       android:text="Change Font Size" 
       android:textSize="25sp" /> 
 
   <Button 
       android:id="@+id/button2" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:layout_margin="20dp" 
       android:gravity="center" 
       android:text="Change Color" 
       android:textSize="25sp" /> 
 
</LinearLayout>





3) DISPLAY THE DIFFERENT SHAPES 


Code for Main_Activity.Java


package com.cscorner.differentshapes; 
import android.app.Activity; 
import android.graphics.Bitmap; 
import android.graphics.Canvas; 
import android.graphics.Color; 
import android.graphics.Paint; 
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle; 
import android.widget.ImageView; 
public class MainActivity extends Activity 
{ 
   @Override 
   public void onCreate(Bundle savedInstanceState) 
   { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
       //Creating a Bitmap 
       Bitmap bg = Bitmap.createBitmap(720, 1280, Bitmap.Config.ARGB_8888); 
       //Setting the Bitmap as background for the ImageView 
       ImageView i = (ImageView) findViewById(R.id.imageView); 
       i.setBackgroundDrawable(new BitmapDrawable(bg)); 
       //Creating the Canvas Object 
       Canvas canvas = new Canvas(bg); 
       //Creating the Paint Object and set its color & TextSize 
       Paint paint = new Paint(); 
       paint.setColor(Color.BLUE); 
       paint.setTextSize(50); 
       //To draw a Rectangle 
       canvas.drawText("Rectangle", 420, 150, paint); 
       canvas.drawRect(400, 200, 650, 700, paint); 
       //To draw a Circle 
       canvas.drawText("Circle", 120, 150, paint); 
       canvas.drawCircle(200, 350, 150, paint); 
       //To draw a Square 
       canvas.drawText("Square", 120, 800, paint); 
       canvas.drawRect(50, 850, 350, 1150, paint); 
       //To draw a Line 
       canvas.drawText("Line", 480, 800, paint); 
       canvas.drawLine(520, 850, 520, 1150, paint); 
   } 
} 


Code for Activity_main.xml 

<?xml version="1.0" encoding="utf-8"?> 
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent"> 
   <ImageView 
       android:layout_width="match_parent" 
       android:layout_height="match_parent" 
       android:id="@+id/imageView" /> 
</RelativeLayout> 







4) CALCULATOR 

 
Code for Main_Activity.Java

package com.example.calculator; 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.TextView; 
import androidx.appcompat.app.AppCompatActivity; 
 
public class MainActivity extends AppCompatActivity { 
 
   private TextView tvResult; 
   private StringBuilder currentInput = new StringBuilder(); 
   private String operator; 
   private double firstNumber, secondNumber; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
       tvResult = findViewById(R.id.tvResult); 
   } 
 
   public void onDigitClick(View view) { 
       Button button = (Button) view; 
       currentInput.append(button.getText().toString()); 
       tvResult.setText(currentInput.toString()); 
   } 
 
   public void onOperatorClick(View view) { 
       if (currentInput.length() == 0) return; 
 
       firstNumber = Double.parseDouble(currentInput.toString()); 
       currentInput.setLength(0); 
 
       Button button = (Button) view; 
       operator = button.getText().toString(); 
       tvResult.setText(operator); 
   } 
 
   public void onEqualClick(View view) { 
       if (currentInput.length() == 0 || operator == null) return; 
     secondNumber = Double.parseDouble(currentInput.toString()); 
       double result = 0; 
 
       switch (operator) { 
           case "+": result = firstNumber + secondNumber; break; 
           case "-": result = firstNumber - secondNumber; break; 
           case "*": result = firstNumber * secondNumber; break; 
           case "/": 
               if (secondNumber != 0) { 
                   result = firstNumber / secondNumber; 
               } else { 
                   tvResult.setText("Error"); 
                   return; 
               } 
               break; 
       } 
 
       tvResult.setText(String.valueOf(result)); 
       currentInput.setLength(0); 
       currentInput.append(result); 
   } 
 
   public void onClearClick(View view) { 
       currentInput.setLength(0); 
       operator = null; 
       tvResult.setText(""); 
   } 
} 



 
Code for Activity_main.xml 


<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:padding="16dp" 
   android:gravity="center" 
   android:background="@android:color/white"> 
 
   <TextView 
       android:id="@+id/tvResult" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:textSize="32sp" 
       android:gravity="end" 
        android:padding="16dp" 
       android:background="@android:color/darker_gray" 
       android:textColor="@android:color/white"/> 
 
   <GridLayout 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:columnCount="4" 
       android:rowCount="5" 
       android:padding="8dp" 
       android:layout_marginTop="10dp"> 
 
       <!-- Number and Operation Buttons --> 
       <Button android:text="7" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="8" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="9" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="/" android:onClick="onOperatorClick" 
style="@style/CalcButton"/> 
 
       <Button android:text="4" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="5" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="6" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="*" android:onClick="onOperatorClick" 
style="@style/CalcButton"/> 
 
       <Button android:text="1" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="2" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="3" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="-" android:onClick="onOperatorClick" 
style="@style/CalcButton"/> 
 
       <Button android:text="C" android:onClick="onClearClick" 
style="@style/CalcButton"/> 
       <Button android:text="0" android:onClick="onDigitClick" 
style="@style/CalcButton"/> 
       <Button android:text="=" android:onClick="onEqualClick" 
style="@style/CalcButton"/> 
       <Button android:text="+" android:onClick="onOperatorClick" 
style="@style/CalcButton"/> 
</GridLayout> 
</LinearLayout> 



Colors.xml

<resources> 
<style name="CalcButton"> 
<item name="android:layout_width">80dp</item> 
<item name="android:layout_height">80dp</item> 
<item name="android:textSize">24sp</item> 
<item name="android:background">@android:color/holo_blue_light</item> 
<item name="android:textColor">@android:color/white</item> 
<item name="android:layout_margin">5dp</item> 
</style> 
</resources>






5) DATABASE (STUDENT DETAILS LOGIN - PASSWORD PROTECTED INFO)


Code for Main_activity.java


package com.cscorner.login2; 
import android.app.Activity; 
import android.content.Context; 
import android.database.Cursor; 
import android.database.sqlite.SQLiteDatabase; 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.EditText; 
import android.widget.Toast; 
 
public class MainActivity extends Activity implements View.OnClickListener { 
 
   // Login Views 
   EditText emailInput, passwordInput; 
   Button loginButton; 
 
   // Student Data Management Views 
   EditText Rollno, Name, Mark1, Mark2, Mark3, Total, Avg, Grade; 
   Button Insert, Delete, View, ViewAll, Calculate; 
   SQLiteDatabase db; 
 
   // Predefined credentials for login 
   private final String predefinedEmail = "user@example.com"; 
   private final String predefinedPassword = "password123"; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
 
       // Start with the login page 
       setContentView(R.layout.activity_login); 
       initializeLoginPage(); 
   } 
 
   // Initialize login page views 
   private void initializeLoginPage() { 
       emailInput = findViewById(R.id.emailInput); 
       passwordInput = findViewById(R.id.passwordInput); 
       loginButton = findViewById(R.id.loginButton); 
       loginButton.setOnClickListener(this); 
   } 
 
   // Initialize student data management page views 
    private void initializeStudentPage() { 
       setContentView(R.layout.activity_student); 
 
       Rollno = findViewById(R.id.Rollno); 
       Name = findViewById(R.id.Name); 
       Mark1 = findViewById(R.id.Mark1); 
       Mark2 = findViewById(R.id.Mark2); 
       Mark3 = findViewById(R.id.Mark3); 
       Total = findViewById(R.id.Total); 
       Avg = findViewById(R.id.Avg); 
       Grade = findViewById(R.id.Grade); 
       Insert = findViewById(R.id.Insert); 
       Delete = findViewById(R.id.Delete); 
       View = findViewById(R.id.View); 
       ViewAll = findViewById(R.id.ViewAll); 
       Calculate = findViewById(R.id.Calculate); 
 
       // Set button listeners 
       Insert.setOnClickListener(this); 
       Delete.setOnClickListener(this); 
       View.setOnClickListener(this); 
       ViewAll.setOnClickListener(this); 
       Calculate.setOnClickListener(this); 
 
       // Initialize the database 
       db = openOrCreateDatabase("StudentDB", Context.MODE_PRIVATE, null); 
       db.execSQL("CREATE TABLE IF NOT EXISTS student(" + 
               "rollno VARCHAR PRIMARY KEY, " + 
               "name VARCHAR, " + 
               "mark1 INTEGER, " + 
               "mark2 INTEGER, " + 
               "mark3 INTEGER, " + 
               "total INTEGER, " + 
               "avg REAL, " + 
               "grade VARCHAR);"); 
   } 
 
   @Override 
   public void onClick(View view) { 
       // Handle Login button click 
       if (view == loginButton) { 
           String email = emailInput.getText().toString().trim(); 
           String password = passwordInput.getText().toString().trim(); 
 
           if (email.equals(predefinedEmail) && 
password.equals(predefinedPassword)) { 
               Toast.makeText(this, "Login Successful!", 
Toast.LENGTH_SHORT).show(); 
               initializeStudentPage(); 
 } else { 
               Toast.makeText(this, "Invalid Email or Password!", 
Toast.LENGTH_SHORT).show(); 
           } 
       } 
 
       // Handle Calculate button 
       if (view == Calculate) { 
           try { 
               int m1 = Integer.parseInt(Mark1.getText().toString()); 
               int m2 = Integer.parseInt(Mark2.getText().toString()); 
               int m3 = Integer.parseInt(Mark3.getText().toString()); 
 
               int total = m1 + m2 + m3; 
               double avg = total / 3.0; 
               String grade; 
 
               if (avg >= 90) grade = "A"; 
               else if (avg >= 80) grade = "B"; 
               else if (avg >= 70) grade = "C"; 
               else if (avg >= 60) grade = "D"; 
               else grade = "F"; 
 
               Total.setText(String.valueOf(total)); 
               Avg.setText(String.format("%.2f", avg)); 
               Grade.setText(grade); 
           } catch (Exception e) { 
               Toast.makeText(this, "Enter valid marks!", 
Toast.LENGTH_SHORT).show(); 
           } 
       } 
 
       // Handle Insert button 
       if (view == Insert) { 
           String roll = Rollno.getText().toString(); 
           String name = Name.getText().toString(); 
           String total = Total.getText().toString(); 
           String avg = Avg.getText().toString(); 
           String grade = Grade.getText().toString(); 
 
           if (roll.isEmpty() || name.isEmpty() || total.isEmpty()) { 
               Toast.makeText(this, "Please fill all fields", 
Toast.LENGTH_SHORT).show(); 
               return; 
           } 
 
           db.execSQL("INSERT INTO student VALUES('" + roll + "', '" + name + 
"', " + 
                   Mark1.getText().toString() + ", " +
                    Mark2.getText().toString() + ", " + 
                   Mark3.getText().toString() + ", " + 
                   total + ", " + avg + ", '" + grade + "');"); 
 
           Toast.makeText(this, "Record Inserted!", 
Toast.LENGTH_SHORT).show(); 
       } 
 
       // Handle Delete button 
       if (view == Delete) { 
           String roll = Rollno.getText().toString(); 
           db.execSQL("DELETE FROM student WHERE rollno = '" + roll + "'"); 
           Toast.makeText(this, "Record Deleted!", Toast.LENGTH_SHORT).show(); 
       } 
 
       // Handle View button 
       if (view == View) { 
           String roll = Rollno.getText().toString(); 
           Cursor c = db.rawQuery("SELECT * FROM student WHERE rollno = '" + 
roll + "'", null); 
           if (c.moveToFirst()) { 
               Name.setText(c.getString(1)); 
               Mark1.setText(c.getString(2)); 
               Mark2.setText(c.getString(3)); 
               Mark3.setText(c.getString(4)); 
               Total.setText(c.getString(5)); 
               Avg.setText(c.getString(6)); 
               Grade.setText(c.getString(7)); 
           } else { 
               Toast.makeText(this, "No Record Found", 
Toast.LENGTH_SHORT).show(); 
           } 
       } 
  // Handle ViewAll button 
       if (view == ViewAll) { 
           Cursor c = db.rawQuery("SELECT * FROM student", null); 
           StringBuilder result = new StringBuilder(); 
 
           while (c.moveToNext()) { 
               result.append("Roll No: ").append(c.getString(0)) 
                       .append("\nName: ").append(c.getString(1)) 
                       .append("\nMarks: ").append(c.getString(2)).append(", 
") 
                       .append(c.getString(3)).append(", 
").append(c.getString(4)) 
                       .append("\nTotal: ").append(c.getString(5)) 
                       .append("\nAverage: ").append(c.getString(6)) 
                       .append("\nGrade: ").append(c.getString(7))
       
 .append("\n\n"); 
           } 
 
           Toast.makeText(this, result.length() > 0 ? result.toString() : "No 
records found", Toast.LENGTH_LONG).show(); 
       } 
   } 
} 


Code for Activity_login.xml


<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:padding="32dp" 
   android:gravity="center"> 
 
   <!-- Email Input --> 
   <EditText 
       android:id="@+id/emailInput" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Email" 
       android:inputType="textEmailAddress" 
       android:padding="10dp" 
       android:textColor="#000000" 
       android:textSize="16sp" 
       android:layout_marginBottom="16dp" /> 
 
   <!-- Password Input --> 
   <EditText 
       android:id="@+id/passwordInput" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Password" 
       android:inputType="textPassword" 
       android:padding="10dp" 
       android:textColor="#000000" 
       android:textSize="16sp" 
       android:layout_marginBottom="32dp" /> 
 
   <!-- Normal Login Button -->
    <Button 
       android:id="@+id/loginButton" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:text="Login" 
       android:textSize="16sp" 
       android:layout_marginTop="16dp" 
       android:layout_marginBottom="16dp" /> 
 
   <!-- Error Message Text (Optional) --> 
   <TextView 
       android:id="@+id/errorMessage" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:textColor="#FF0000" 
       android:textSize="14sp" 
       android:gravity="center" 
       android:visibility="gone" 
       android:layout_marginTop="16dp"/> 
 
</LinearLayout> 




 
Code for Activity_student.xml


<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:padding="16dp"> 
 
   <!-- Roll Number Input --> 
   <EditText 
       android:id="@+id/Rollno" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Roll Number" 
       android:inputType="number" />
        <!-- Name Input --> 
   <EditText 
       android:id="@+id/Name" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Name" 
       android:inputType="textPersonName" /> 
 
   <!-- Marks Inputs --> 
   <EditText 
       android:id="@+id/Mark1" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Mark 1" 
       android:inputType="number" /> 
 
   <EditText 
       android:id="@+id/Mark2" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Mark 2" 
       android:inputType="number" /> 
 
   <EditText 
       android:id="@+id/Mark3" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Mark 3" 
       android:inputType="number" /> 
 
   <!-- Total, Average, and Grade --> 
   <EditText 
       android:id="@+id/Total" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Total" 
       android:inputType="none" /> 
 
   <EditText 
       android:id="@+id/Avg" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Average" 
       android:inputType="none" /> 
 
   <EditText 
       android:id="@+id/Grade" 
       android:layout_width="match_parent" 
        android:layout_height="wrap_content" 
       android:hint="Grade" 
       android:inputType="none" /> 
 
   <!-- Buttons --> 
   <Button 
       android:id="@+id/Calculate" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:text="Calculate" /> 
 
   <Button 
       android:id="@+id/Insert" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:text="Insert" /> 
 
   <Button 
       android:id="@+id/Delete" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:text="Delete" /> 
 
   <Button 
       android:id="@+id/View" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:text="View" /> 
 
   <Button 
       android:id="@+id/ViewAll" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:text="View All" /> 
</LinearLayout>





6) DATABASE OPERATIONS (INSERT, UPDATE, VIEW, FIND, SALARY 
CALCULATION)


Code for Main_Activity.java 


package com.cscorner.databaseee;
import android.app.Activity; 
import android.app.AlertDialog.Builder; 
import android.content.Context; 
import android.database.Cursor; 
import android.database.sqlite.SQLiteDatabase; 
import android.os.Bundle; 
import android.view.View;
import android.view.View.OnClickListener; 
import android.widget.Button; 
import android.widget.EditText; 
 
public class MainActivity extends Activity implements OnClickListener { 
   EditText Rollno, Name, Marks; 
   Button Insert, Delete, Update, View, ViewAll; 
   SQLiteDatabase db; 
 
   @Override 
   public void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
       Rollno = findViewById(R.id.Rollno); 
       Name = findViewById(R.id.Name); 
       Marks = findViewById(R.id.Marks); 
       Insert = findViewById(R.id.Insert); 
       Delete = findViewById(R.id.Delete); 
       Update = findViewById(R.id.Update); 
       View = findViewById(R.id.View); 
       ViewAll = findViewById(R.id.ViewAll); 
 
       Insert.setOnClickListener(this); 
       Delete.setOnClickListener(this); 
       Update.setOnClickListener(this); 
       View.setOnClickListener(this); 
       ViewAll.setOnClickListener(this); 
 
       // Creating database and table 
       db = openOrCreateDatabase("StudentDB", Context.MODE_PRIVATE, null); 
       db.execSQL("CREATE TABLE IF NOT EXISTS student(rollno VARCHAR, name 
VARCHAR, marks VARCHAR);");
} 
 
   public void onClick(View view) { 
       // Insert 
       if (view == Insert) { 
           if (Rollno.getText().toString().trim().isEmpty() || 
                   Name.getText().toString().trim().isEmpty() || 
                   Marks.getText().toString().trim().isEmpty()) { 
               showMessage("Error", "Please enter all values"); 
               return; 
           } 
           db.execSQL("INSERT INTO student VALUES('" + 
                   Rollno.getText() + "','" + Name.getText() + "','" + 
Marks.getText() + "');"); 
           showMessage("Success", "Record added"); 
           clearText();
            } 
 
       // Delete 
       else if (view == Delete) { 
           if (Rollno.getText().toString().trim().isEmpty()) { 
               showMessage("Error", "Please enter Rollno"); 
               return; 
           } 
           Cursor c = db.rawQuery("SELECT * FROM student WHERE rollno='" + 
Rollno.getText() + "'", null); 
           if (c.moveToFirst()) { 
               db.execSQL("DELETE FROM student WHERE rollno='" + 
Rollno.getText() + "'"); 
               showMessage("Success", "Record Deleted"); 
           } else { 
               showMessage("Error", "Invalid Rollno"); 
           } 
           clearText(); 
       } 
 
       // Update 
       else if (view == Update) { 
           if (Rollno.getText().toString().trim().isEmpty()) { 
               showMessage("Error", "Please enter Rollno"); 
               return; 
           } 
           Cursor c = db.rawQuery("SELECT * FROM student WHERE rollno='" + 
Rollno.getText() + "'", null); 
           if (c.moveToFirst()) { 
               db.execSQL("UPDATE student SET name='" + Name.getText() + 
                       "', marks='" + Marks.getText() + "' WHERE rollno='" + 
Rollno.getText() + "'"); 
               showMessage("Success", "Record Modified"); 
           } else { 
               showMessage("Error", "Invalid Rollno"); 
           } 
           clearText(); 
       } 
 
       // View 
       else if (view == View) { 
           if (Rollno.getText().toString().trim().isEmpty()) { 
               showMessage("Error", "Please enter Rollno"); 
               return; 
           } 
           Cursor c = db.rawQuery("SELECT * FROM student WHERE rollno='" + 
Rollno.getText() + "'", null); 
           if (c.moveToFirst()) { 
               Name.setText(c.getString(1));
                Marks.setText(c.getString(2)); 
           } else { 
               showMessage("Error", "Invalid Rollno"); 
               clearText(); 
           } 
       } 
 
       // View All 
       else if (view == ViewAll) { 
           Cursor c = db.rawQuery("SELECT * FROM student", null); 
           if (c.getCount() == 0) { 
               showMessage("Error", "No records found"); 
               return; 
           } 
           StringBuilder buffer = new StringBuilder(); 
           while (c.moveToNext()) { 
               buffer.append("Rollno: ").append(c.getString(0)).append("\n"); 
               buffer.append("Name: ").append(c.getString(1)).append("\n"); 
               buffer.append("Marks: ").append(c.getString(2)).append("\n\n"); 
           } 
           showMessage("Student Details", buffer.toString()); 
       } 
   } 
 
   public void showMessage(String title, String message) { 
       Builder builder = new Builder(this); 
       builder.setCancelable(true); 
       builder.setTitle(title); 
       builder.setMessage(message); 
       builder.show(); 
   } 
 
   public void clearText() { 
       Rollno.setText(""); 
       Name.setText(""); 
       Marks.setText(""); 
       Rollno.requestFocus(); 
   } 
} 



Code for Activity_main.xml 
           
<?xml version="1.0" encoding="utf-8"?> 
<AbsoluteLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent"> 
   <TextView 
 android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_x="50dp" 
       android:layout_y="20dp" 
       android:text="Student Details" 
       android:textSize="30sp" /> 
 
   <TextView 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_x="20dp" 
       android:layout_y="110dp" 
       android:text="Enter Rollno:" 
       android:textSize="20sp" /> 
 
   <EditText 
       android:id="@+id/Rollno" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
       android:layout_x="175dp" 
       android:layout_y="100dp" 
       android:inputType="number" 
       android:textSize="20sp" /> 
 
   <TextView 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_x="20dp" 
       android:layout_y="160dp" 
       android:text="Enter Name:" 
       android:textSize="20sp" /> 
 
   <EditText 
       android:id="@+id/Name" 
   android:layout_width="150dp" 
   android:layout_height="wrap_content" 
   android:layout_x="175dp" 
   android:layout_y="150dp" 
   android:inputType="text" 
   android:textSize="20sp" /> 
 
   <TextView 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_x="20dp" 
       android:layout_y="210dp" 
       android:text="Enter Marks:" 
       android:textSize="20sp" /> 
 <EditText 
       android:id="@+id/Marks" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
       android:layout_x="175dp" 
       android:layout_y="200dp" 
       android:inputType="number" 
       android:textSize="20sp" /> 
 
   <Button 
       android:id="@+id/Insert" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
       android:layout_x="25dp" 
       android:layout_y="300dp" 
       android:text="Insert" 
       android:textSize="30dp" /> 
 
   <Button 
       android:id="@+id/Delete" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
       android:layout_x="200dp" 
       android:layout_y="300dp" 
       android:text="Delete" 
       android:textSize="30dp" /> 
 
   <Button 
       android:id="@+id/Update" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
 
       android:layout_x="25dp" 
       android:layout_y="400dp" 
       android:text="Update" 
       android:textSize="30dp" /> 
 
   <Button 
       android:id="@+id/View" 
       android:layout_width="150dp" 
       android:layout_height="wrap_content" 
       android:layout_x="200dp" 
       android:layout_y="400dp" 
       android:text="View" 
       android:textSize="30dp" /> 
 
   <Button 
       android:id="@+id/ViewAll" 
       android:layout_width="200dp" 

android:layout_height="wrap_content" 
android:layout_x="100dp" 
android:layout_y="500dp" 
android:text="View All" 
android:textSize="30dp" /> 
</AbsoluteLayout> 






7)MULTITHREADING


Code for Main_Activity.Java


package com.cscorner.exno6; 
 
import android.app.Activity; 
import android.os.Bundle; 
import android.os.Handler; 
import android.os.Looper; 
import android.view.View; 
import android.widget.TextView; 
 
public class MainActivity extends Activity { 
   private TextView tvOutput; 
   private static final int t1 = 1; 
   private static final int t2 = 2; 
   private static final int t3 = 3; 
 
   Handler handler = new Handler(Looper.getMainLooper()) { 
       @Override 
       public void handleMessage(android.os.Message msg) { 
           if (msg.what == t1) { 
               tvOutput.append("\nIn thread 1"); 
           } else if (msg.what == t2) { 
               tvOutput.append("\nIn thread 2"); 
           } else if (msg.what == t3) { 
               tvOutput.append("\nIn thread 3"); 
           } 
       } 
   }; 
 
   @Override 
   public void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
       tvOutput = findViewById(R.id.textView1); 
   } 
 
   public void fetchData(View v) { 
       tvOutput.setText("Main thread"); 
 
       Thread thread1 = new Thread(() -> { 
           for (int i = 0; i < 5; i++) { 
               try { 
                   Thread.sleep(1000); 
               } catch (InterruptedException e) { 
                   e.printStackTrace(); 
 } 
               handler.sendEmptyMessage(t1); 
           } 
       }); 
 
       Thread thread2 = new Thread(() -> { 
           for (int i = 0; i < 5; i++) { 
               try { 
                   Thread.sleep(1000); 
               } catch (InterruptedException e) { 
                   e.printStackTrace(); 
               } 
               handler.sendEmptyMessage(t2); 
           } 
       }); 
 
       Thread thread3 = new Thread(() -> { 
           for (int i = 0; i < 5; i++) { 
               try { 
                   Thread.sleep(1000); 
               } catch (InterruptedException e) { 
                   e.printStackTrace(); 
               } 
               handler.sendEmptyMessage(t3); 
           } 
       }); 
 
       thread1.start(); 
       thread2.start(); 
       thread3.start(); 
   } 
} 


Code for Activity_main.xml 


<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:id="@+id/info" > 
   <Button 
       android:id="@+id/button1" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:onClick="fetchData" 
       android:text="Start MULTITHREAD" /> 
   <TextView 
       android:id="@+id/textView1" 
android:layout_width="wrap_content" 
android:layout_height="wrap_content" 
android:text="Main thread" /> 
</LinearLayout> 






8)GPSLOCATION 
 
Code for Main_Activity.java


package com.cscorner.gpslocation; 
 
import android.Manifest; 
import android.content.pm.PackageManager; 
import android.location.Location; 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.TextView; 
import android.widget.Toast; 
 
import androidx.annotation.NonNull; 
import androidx.appcompat.app.AppCompatActivity; 
import androidx.core.app.ActivityCompat; 
 
import com.google.android.gms.location.FusedLocationProviderClient; 
import com.google.android.gms.location.LocationServices; 
import com.google.android.gms.tasks.OnSuccessListener; 
 
public class MainActivity extends AppCompatActivity { 
 
   private static final int LOCATION_PERMISSION_CODE = 1; 
   private FusedLocationProviderClient fusedLocationClient; 
   private TextView locationText; 
   private Button showLocationBtn; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
       showLocationBtn = findViewById(R.id.showLocationBtn); 
       locationText = findViewById(R.id.locationText); 
       fusedLocationClient = 
LocationServices.getFusedLocationProviderClient(this); 
 
       showLocationBtn.setOnClickListener(new View.OnClickListener() { 
           @Override 
           public void onClick(View v) { 
               getLocation(); 
           } 
       }); 
 
       // Request location permission if not granted 
if (ActivityCompat.checkSelfPermission(this, 
Manifest.permission.ACCESS_FINE_LOCATION) 
               != PackageManager.PERMISSION_GRANTED) { 
           ActivityCompat.requestPermissions(this, 
                   new String[]{Manifest.permission.ACCESS_FINE_LOCATION}, 
                   LOCATION_PERMISSION_CODE); 
       } 
   } 
 
   private void getLocation() { 
       if (ActivityCompat.checkSelfPermission(this, 
Manifest.permission.ACCESS_FINE_LOCATION) 
               == PackageManager.PERMISSION_GRANTED) { 
           fusedLocationClient.getLastLocation() 
                   .addOnSuccessListener(this, new 
OnSuccessListener<Location>() { 
                       @Override 
                       public void onSuccess(Location location) { 
                           if (location != null) { 
                               String latLong = "Your Location is\nLat: " + 
location.getLatitude() 
                                       + "\nLong: " + location.getLongitude(); 
                               locationText.setText(latLong); 
                               locationText.setVisibility(View.VISIBLE); 
                           } else { 
                               Toast.makeText(MainActivity.this, "Unable to 
get location", Toast.LENGTH_SHORT).show(); 
                           } 
                       } 
                   }); 
       } else { 
           Toast.makeText(this, "Location permission not granted", 
Toast.LENGTH_SHORT).show(); 
       } 
   } 
 
   @Override 
   public void onRequestPermissionsResult(int requestCode, 
                                          @NonNull String[] permissions, 
                                          @NonNull int[] grantResults) { 
       super.onRequestPermissionsResult(requestCode, permissions, 
grantResults); 
       if (requestCode == LOCATION_PERMISSION_CODE && 
               grantResults.length > 0 && 
               grantResults[0] == PackageManager.PERMISSION_GRANTED) { 
           getLocation(); 
       } else { 
           Toast.makeText(this, "Permission Denied", 
Toast.LENGTH_SHORT).show(); 
     } 
   } 
} 


Code for activity_main.xml


<?xml version="1.0" encoding="utf-8"?> 
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:background="#000000" 
   android:padding="16dp"> 
 
   <Button 
       android:id="@+id/showLocationBtn" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:text="Show_Location" 
       android:layout_centerInParent="true" 
       android:background="#CCCCCC" 
       android:textColor="#000000"/> 
 
   <TextView 
       android:id="@+id/locationText" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_below="@id/showLocationBtn" 
       android:layout_centerHorizontal="true" 
       android:layout_marginTop="30dp" 
       android:padding="16dp" 
       android:text="Your Location is\nLat: \nLong:" 
       android:textColor="#FFFFFF" 
       android:background="@drawable/rounded_bg" 
       android:visibility="gone"/> 
</RelativeLayout> 



Code for AndroidManifest.xml


<?xml version="1.0" encoding="utf-8"?> 
<manifest xmlns:android="http://schemas.android.com/apk/res/android" 
   xmlns:tools="http://schemas.android.com/tools" 
   package="com.cscorner.gpslocation"> 
 
   <!-- Permissions --> 
   <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" /> 
 
   <!-- Required for some devices using network location (optional) --> 
   <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" 
/> 
 
   <!-- Needed for accessing location in the background (if applicable) --> 
   <!-- <uses-permission 
android:name="android.permission.ACCESS_BACKGROUND_LOCATION" /> --> 
 
   <application 
       android:allowBackup="true" 
       android:icon="@mipmap/ic_launcher" 
       android:label="@string/app_name" 
       android:roundIcon="@mipmap/ic_launcher_round" 
       android:supportsRtl="true" 
       android:theme="@style/Theme.GPSLOCATION" 
       tools:targetApi="31"> 
 
       <activity 
           android:name=".MainActivity" 
           android:exported="true" 
           android:theme="@style/Theme.GPSLOCATION"> 
           <intent-filter> 
               <action android:name="android.intent.action.MAIN" /> 
               <category android:name="android.intent.category.LAUNCHER" /> 
           </intent-filter> 
       </activity> 
 
   </application> 
 
</manifest>






9)RSS FEED READER


Code for MainActivity.java


package com.cscorner.rssfeed;  
import android.app.ListActivity; 
import android.content.Intent; 
import android.net.Uri; 
import android.os.AsyncTask; 
import android.os.Bundle; 
import android.view.View; 
import android.widget.ArrayAdapter; 
import android.widget.ListView; 
 
import org.xmlpull.v1.XmlPullParser; 
import org.xmlpull.v1.XmlPullParserException; 
import org.xmlpull.v1.XmlPullParserFactory; 
 
import java.io.IOException; 
import java.io.InputStream; 
import java.net.MalformedURLException; 
import java.net.URL; 
import java.util.ArrayList; 
import java.util.List; 
 XmlPullParser xpp = factory.newPullParser(); 
 
               xpp.setInput(getInputStream(url), "UTF_8"); 
               boolean insideItem = false; 
 
               int eventType = xpp.getEventType(); 
               while (eventType != XmlPullParser.END_DOCUMENT) { 
                   if (eventType == XmlPullParser.START_TAG) { 
                       if (xpp.getName().equalsIgnoreCase("item")) { 
                           insideItem = true; 
                       } else if (xpp.getName().equalsIgnoreCase("title")) { 
                           if (insideItem) { 
                               headlines.add(xpp.nextText()); 
                           } 
                       } else if (xpp.getName().equalsIgnoreCase("link")) { 
                           if (insideItem) { 
                               links.add(xpp.nextText()); 
                           } 
                       } 
                   } else if (eventType == XmlPullParser.END_TAG && 
                           xpp.getName().equalsIgnoreCase("item")) { 
                       insideItem = false; 
                   } 
                   eventType = xpp.next(); 
               } 
 
           } catch (MalformedURLException e) { 
               e.printStackTrace(); 
           } catch (XmlPullParserException e) { 
               e.printStackTrace(); 
           } catch (IOException e) { 
               e.printStackTrace(); 
           } 
 
           return new ArrayAdapter<>(MainActivity.this, 
                   android.R.layout.simple_list_item_1, headlines); 
       } 
 
       @Override 
       protected void onPostExecute(ArrayAdapter<String> adapter) { 
           setListAdapter(adapter); 
       } 
   } 
 
   @Override 
   protected void onListItemClick(ListView l, View v, int position, long id) { 
       Uri uri = Uri.parse(links.get(position)); 
       Intent intent = new Intent(Intent.ACTION_VIEW, uri); 
       startActivity(intent); 
public class MainActivity extends ListActivity { 
 
   List<String> headlines; 
   List<String> links; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       new MyAsyncTask().execute(); 
   } 
 
   class MyAsyncTask extends AsyncTask<Void, Void, ArrayAdapter<String>> { 
 
       @Override 
       protected ArrayAdapter<String> doInBackground(Void... voids) { 
           headlines = new ArrayList<>(); 
           links = new ArrayList<>(); 
           try { 
               URL url = new URL("https://codingconnect.net/feed"); 
               XmlPullParserFactory factory = 
XmlPullParserFactory.newInstance(); 
               factory.setNamespaceAware(false); 
                } 
 
   public InputStream getInputStream(URL url) { 
       try { 
           return url.openConnection().getInputStream(); 
       } catch (IOException e) { 
           e.printStackTrace(); 
           return null; 
       } 
   } 
} 


Code for Activity_main.xml

<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="fill_parent" 
   android:layout_height="fill_parent" 
   android:orientation="vertical" > 
 
   <ListView 
       android:id="@+id/listView" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" /> 
 
</LinearLayout>


Modification for Android Manifest.xml

<?xml version="1.0" encoding="utf-8"?> 
<manifest xmlns:android="http://schemas.android.com/apk/res/android" 
   package="com.cscorner.rssfeed"> 
 
   <!-- Required to fetch online RSS feed --> 
   <uses-permission android:name="android.permission.INTERNET" /> 
 
   <application 
       android:allowBackup="true" 
       android:icon="@mipmap/ic_launcher" 
       android:label="RSS Feed Reader" 
       android:roundIcon="@mipmap/ic_launcher_round" 
       android:supportsRtl="true" 
       android:theme="@style/Theme.AppCompat.Light.NoActionBar"> 
       <activity 
           android:name=".MainActivity"
           android:exported="true"> 
<intent-filter> 
<action android:name="android.intent.action.MAIN" /> 
<category android:name="android.intent.category.LAUNCHER" /> 
</intent-filter> 
</activity> 
</application> 
</manifest>





10) SMS RECEIVE MSG ALERT

    Code for MainActivity.java


    package com.cscorner.smsalertmsg; 
 
import android.Manifest; 
import android.app.NotificationChannel; 
import android.app.NotificationManager; 
import android.content.pm.PackageManager; 
import android.os.Build; 
import android.os.Bundle; 
import android.widget.Button; 
import android.widget.EditText; 
 
import androidx.appcompat.app.AppCompatActivity; 
import androidx.core.app.ActivityCompat; 
import androidx.core.app.NotificationCompat; 
import androidx.core.app.NotificationManagerCompat; 
 
public class MainActivity extends AppCompatActivity { 
 
   private static final String CHANNEL_ID = "message_channel"; 
   private static final int NOTIFICATION_ID = 1; 
 
   EditText messageInput; 
   Button notifyBtn; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
       messageInput = findViewById(R.id.messageInput); 
       notifyBtn = findViewById(R.id.notifyBtn); 
 
       // Request POST_NOTIFICATIONS permission for Android 13+ 
       if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) { 
           if (checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != 
PackageManager.PERMISSION_GRANTED) { 
               requestPermissions(new 
String[]{Manifest.permission.POST_NOTIFICATIONS}, 1); 
           } 
       } 
 
       createNotificationChannel(); 
 
       notifyBtn.setOnClickListener(v -> {
        String message = messageInput.getText().toString(); 
           if (!message.isEmpty()) { 
               showNotification(message); 
           } 
       }); 
   } 
 
   private void showNotification(String message) { 
       NotificationCompat.Builder builder = new 
NotificationCompat.Builder(this, CHANNEL_ID) 
               .setSmallIcon(R.drawable.ic_launcher_foreground) 
               .setContentTitle("New Message") 
               .setContentText(message) 
               .setPriority(NotificationCompat.PRIORITY_DEFAULT); 
 
       NotificationManagerCompat notificationManager = 
NotificationManagerCompat.from(this); 
       if (ActivityCompat.checkSelfPermission(this, 
Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) 
{ 
           // TODO: Consider calling 
           //    ActivityCompat#requestPermissions 
           // here to request the missing permissions, and then overriding 
           //   public void onRequestPermissionsResult(int requestCode, 
String[] permissions, 
           //                                          int[] grantResults) 
           // to handle the case where the user grants the permission. See the 
documentation 
           // for ActivityCompat#requestPermissions for more details. 
           return; 
       } 
       notificationManager.notify(NOTIFICATION_ID, builder.build()); 
   } 
 
   private void createNotificationChannel() { 
       if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) { 
           CharSequence name = "Message Channel"; 
           String description = "Channel for message notifications"; 
           int importance = NotificationManager.IMPORTANCE_DEFAULT; 
           NotificationChannel channel = new NotificationChannel(CHANNEL_ID, 
name, importance); 
           channel.setDescription(description); 
 
           NotificationManager manager = 
getSystemService(NotificationManager.class); 
           manager.createNotificationChannel(channel); 
       } 
   } 
}


Code for Activity_main.xml 
 
<?xml version="1.0" encoding="utf-8"
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:padding="16dp" 
   android:gravity="center"> 
 
   <EditText 
       android:id="@+id/messageInput" 
       android:layout_width="match_parent" 
       android:layout_height="wrap_content" 
       android:hint="Enter your message" 
       android:inputType="text" 
       android:layout_marginBottom="20dp"/> 
 
   <Button 
       android:id="@+id/notifyBtn" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:text="NOTIFY"/> 
</LinearLayout>


Modification for Android Manifest.xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android" 
   package="com.cscorner.smsalertmsg"> 
 
   <uses-permission android:name="android.permission.POST_NOTIFICATIONS" /> 
 
   <application 
       android:allowBackup="true" 
       android:icon="@mipmap/ic_launcher" 
       android:label="@string/app_name" 
       android:roundIcon="@mipmap/ic_launcher_round" 
       android:supportsRtl="true" 
       android:theme="@style/Theme.Smsalertmsg"> 
       <activity 
           android:name=".MainActivity" 
           android:exported="true"> 
           <intent-filter> 
               <action android:name="android.intent.action.MAIN" /> 
               <category android:name="android.intent.category.LAUNCHER" /> 
               </intent-filter> 
</activity> 
</application> 
</manifest> 





11)  SIMPLE GAME APPLICATION


Code for MainActivity.java


package com.cscorner.tictactoegameappln; 
 
import android.os.Bundle; 
import android.view.View; 
import android.widget.Button; 
import android.widget.GridLayout; 
import android.widget.TextView; 
import androidx.appcompat.app.AppCompatActivity; 
 
public class MainActivity extends AppCompatActivity { 
 
   private String currentPlayer = "X"; 
   private String[][] board = new String[3][3]; 
   private Button[][] buttons = new Button[3][3]; 
   private TextView statusText; 
   private boolean gameActive = true; 
 
   @Override 
   protected void onCreate(Bundle savedInstanceState) { 
       super.onCreate(savedInstanceState); 
       setContentView(R.layout.activity_main); 
 
       statusText = findViewById(R.id.statusText); 
       GridLayout gridLayout = findViewById(R.id.gridLayout); 
 
       // Initialize buttons and board 
       for (int i = 0; i < 3; i++) { 
           for (int j = 0; j < 3; j++) { 
               String buttonId = "button_" + i + "_" + j; 
               int resID = getResources().getIdentifier(buttonId, "id", 
getPackageName()); 
               buttons[i][j] = findViewById(resID); 
               buttons[i][j].setText(""); 
               buttons[i][j].setOnClickListener(new View.OnClickListener() { 
                   @Override 
                   public void onClick(View v) { 
                       Button clickedButton = (Button) v; 
                       int row = 
Integer.parseInt(clickedButton.getTag().toString().split("_")[1]); 
                       int col = 
Integer.parseInt(clickedButton.getTag().toString().split("_")[2]); 
 
                       if (gameActive && board[row][col] == null) { 
                           board[row][col] = currentPlayer; 
                             clickedButton.setText(currentPlayer); 
 
                           if (checkWinner()) { 
                               statusText.setText(currentPlayer + " wins!"); 
                               gameActive = false; 
                           } else if (isBoardFull()) { 
                               statusText.setText("It's a draw!"); 
                               gameActive = false; 
                           } else { 
                               currentPlayer = (currentPlayer.equals("X")) ? 
"O" : "X"; 
                               statusText.setText(currentPlayer + "'s turn"); 
                           } 
                       } 
                   } 
               }); 
           } 
       } 
 
       // Reset the game 
       Button resetButton = findViewById(R.id.resetButton); 
       resetButton.setOnClickListener(v -> resetGame()); 
   } 
 
   private boolean checkWinner() { 
       // Check rows, columns, and diagonals for a winner 
       for (int i = 0; i < 3; i++) { 
           if (board[i][0] != null && board[i][0].equals(board[i][1]) && 
board[i][0].equals(board[i][2])) { 
               return true; 
           } 
           if (board[0][i] != null && board[0][i].equals(board[1][i]) && 
board[0][i].equals(board[2][i])) { 
               return true; 
           } 
       } 
 
       if (board[0][0] != null && board[0][0].equals(board[1][1]) && 
board[0][0].equals(board[2][2])) { 
           return true; 
       } 
       if (board[0][2] != null && board[0][2].equals(board[1][1]) && 
board[0][2].equals(board[2][0])) { 
           return true; 
       } 
 
       return false; 
   }
    private boolean isBoardFull() { 
       for (int i = 0; i < 3; i++) { 
           for (int j = 0; j < 3; j++) { 
               if (board[i][j] == null) { 
                   return false; 
               } 
           } 
       } 
       return true; 
   } 
 
   private void resetGame() { 
       currentPlayer = "X"; 
       gameActive = true; 
       statusText.setText(currentPlayer + "'s turn"); 
       board = new String[3][3]; 
       for (int i = 0; i < 3; i++) { 
           for (int j = 0; j < 3; j++) { 
               buttons[i][j].setText(""); 
           } 
       } 
   } 
} 



Code for Activity_main.xml

<?xml version="1.0" encoding="utf-8"?> 
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android" 
   android:layout_width="match_parent" 
   android:layout_height="match_parent" 
   android:orientation="vertical" 
   android:gravity="center" 
   android:padding="20dp"> 
 
   <TextView 
       android:id="@+id/statusText" 
       android:text="X's turn" 
       android:textSize="24sp" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_marginBottom="20dp" /> 
 
   <GridLayout 
       android:id="@+id/gridLayout" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:columnCount="3"
        android:rowCount="3" 
       android:layout_gravity="center"> 
 
       <!-- 9 Buttons for the Tic-Tac-Toe grid --> 
       <Button 
           android:id="@+id/button_0_0" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_0_0" /> 
       <Button 
           android:id="@+id/button_0_1" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_0_1" /> 
       <Button 
           android:id="@+id/button_0_2" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_0_2" /> 
 
       <Button 
           android:id="@+id/button_1_0" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_1_0" /> 
       <Button 
           android:id="@+id/button_1_1" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_1_1" /> 
       <Button 
           android:id="@+id/button_1_2" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_1_2" /> 
 
       <Button
        android:id="@+id/button_2_0" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_2_0" /> 
       <Button 
           android:id="@+id/button_2_1" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_2_1" /> 
       <Button 
           android:id="@+id/button_2_2" 
           android:layout_width="100dp" 
           android:layout_height="100dp" 
           android:textSize="30sp" 
           android:layout_margin="5dp" 
           android:tag="button_2_2" /> 
   </GridLayout> 
 
   <Button 
       android:id="@+id/resetButton" 
       android:text="Reset Game" 
       android:textSize="20sp" 
       android:layout_width="wrap_content" 
       android:layout_height="wrap_content" 
       android:layout_marginTop="20dp" /> 
</LinearLayout> 

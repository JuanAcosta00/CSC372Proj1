<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <title>CSC Project 1 PHP</title>
</head>
<body>
  <div id="app"></div>
  <script type="text/javascript" src="app.js"></script>
</body>

<br><hr><br>

<?php
  // Error demo
  echo "space saved for error demo<br>";
  //echo 'hello world'
  //echo 'hello world';

  //Parse error: syntax error, unexpected token "echo", expecting "," or ";" in D:\Program
  //Files\xampp\htdocs\CSC372Proj1\client\dist\index.php on line 17

  echo "<br><hr><br>";

  //syntax demo
  echo "syntax demo<br><br>";
  // Keywords are not case sensitive
  echo "hello world<br>";
  ECHO "hello world<br>";
  EcHo "hello world<br>";
  
  echo "<br><hr><br>";

  //variable declare and delete demo
  echo "variable declare and delete<br><br>";
  //Variable can't start with number and is case sensitive
  //must start with '$'
  $a = 1;
  echo "\$a = ".$a;
  // delete variable
  unset($a);
  echo "\$a = ".$a;
  //output variable with echo is pretty similar to bash script
  echo "<br><br>";
  $t = "hello";
  echo "$t world!<br>";
  echo "hi ".$t." world<br>";
  // loosely typed
  $t = 1;
  echo "$t world!<br>";
  $a = 'b';
  $b = "test";
  echo $a."<br>";
  echo $$a."<br>";
  // address
  echo "<br>";
  $a = 10;
  $b = $a;
  $b = 5;
  echo "\$a = ".$a.", \$b = ".$b."<br>";
  $a = "abc";
  $b = &$a;
  $b = "def";
  echo "\$a = ".$a.", \$b = ".$b."<br>";
  // and many predefined variable, start with a underscore
  // like $_GET, $_POST, $_REQUEST
  // don't know how to demo these 

  echo "<br><hr><br>";
  
  // data type demo
  echo "data type demo<br><br>";
  // 4 primitives: int float string boolean
  $a = 3.14;
  var_dump($a);
  echo "<br>";
  // Object and Array, object saved for later with class
  echo "<br>indexed arrays: <br>";
  $courses = array("CSC372", "CSC245", "CSC345");
  var_dump($courses);
  echo "<br>";
  echo $courses[0]."<br>";
  echo count($courses)."<br>";
  echo "<br>associative arrays: <br>";
  $majors = array("CS" => "Computer Science", "ECE" => "Electrical and Computer Engineering");
  $majors["PHYS"] = "Physics";
  var_dump($majors);
  echo "<br>";
  echo $majors["CS"]."<br>";
  // multiple dimension array are also supported
  //NULL
  $a = null;
  var_dump($a);
  echo "<br>";
  // a special data type: resource, to store external database

  echo "<br><hr><br>";

  // operators demo
  echo "logic and conditions demo<br>";
  // nothing abnormal tho
  echo "<br>arithmetic: <br>";
  $a = 750;
  $b = 20;
  echo $a+$b."<br>";
  echo $a-$b."<br>";
  echo $a*$b."<br>";
  echo $a/$b."<br>";
  echo $a%$b."<br>";
  echo $a**$b."<br>";
  echo "<br>assignment: <br>";
  $a = 750;
  $b = 20;
  echo $a." ".$b."<br>";
  $a+=$b;
  echo $a."<br>";
  // b became 40 as well
  echo $a." ".$b."<br>";
  $b = 10;
  echo $a." ".$b."<br>";
  // both changes
  // comparison operators
  echo "<br>comparison: <br>";
  // ==, !=, >, <, >=, <= are the normal ones
  $a = 1;
  $b = "1";
  var_dump($a == $b); // this will return true
  echo "<br>";
  var_dump($a === $b);
  echo "<br>";
  var_dump($a <> $b);
  echo "<br>";
  var_dump($a !== $b);
  echo "<br>";
  echo ($a <=> $b); // return 0 if values are equal, -1 if $a < $b, 1 if $a > $b
  echo "<br>";
  // logical
  echo "<br>logical: <br>";
  // and, or, xor, &&, ||, !
  // increment and decrement
  echo "<br>increment and decrement: <br>";
  // ++$a, $a++, --$a, $a--
  // String
  echo "<br>String: <br>";
  //., .=
  unset($b);
  $a = "hello";
  $b = "world<br>";
  echo $a.$b;
  $a.=$b;
  echo $a;
  // array
  echo "<br>arrat: <br>";
  //+, ==, ===, !=, <>, !==
  unset($a);unset($b);
  $a = array("a", "b");
  $b = array("c"=>"C", "d"=>"D");
  print_r($a + $b);
  echo "<br>";
  $a = array("a"=>"A", "b"=>"B");
  $b = array("b"=>"B", "a"=>"A");
  var_dump($a == $b);
  echo "<br>";
  var_dump($a === $b);
  echo "<br>";
  var_dump($a != $b);
  echo "<br>";
  var_dump($a <> $b);
  echo "<br>";
  var_dump($a !== $b);
  echo "<br>";
  // conditional assignment
  echo "<br>conditional assignment: <br>";
  //?:, ??
  echo $status = (empty($user)) ? "anonymous" : "logged in";
  echo "<br>";
  $user = "a";
  echo $status = (empty($user)) ? "anonymous" : "logged in";
  echo "<br>";
  echo $color = $color ?? "red";
  echo "<br>";
  $color = "blue";
  echo $color = $color ?? "red";
  echo "<br>";

  echo "<br><hr><br>";
?>

<form>
<h3> simple number guessing game to demo if conditions and $_GET</h3>
<h4> the number is from 0 to 10000
<input type="text" name="num">
<button type="submit" name="submit" value="submit">Guess</button>
</form>
<?php
  // correct answer is 1863
  if (isset($_GET["submit"])) {
    $n = $_GET["num"];
    if ($n > 10000 || $n < 0) echo "<br>out of range<br>";
    else if ($n > 1863) echo "<br>too high<br>";
    else if ($n < 1863) echo "<br>too low<br>";
    else echo "<br>you got it! <br>";
  } else echo "<br>guess something<br>";
?>

<br><hr><br>
<form>
<h3> dummy interaction to demo switch and $_GET</h3>
<h4> pick a color theme </h4>
<select name="color" >
  <option disabled selected value></option>
  <option>Silver & Green</option>
  <option>Gold & Scarlet</option>
  <option>Bronze & Blue</option>
  <option>Black & Yellow</option>
</select>
<button type="select" name="select" value="select">Select</button>
</form>
<?php
  // correct answer is 1863
  if (isset($_GET["select"])) {
    $input = $_GET["color"];
    switch($input) {
      case null:
        echo "<br>no input<br>";
      break;
      case "Silver & Green": 
        echo "<br>Slytherin!<br> ";
      break;
      case "Gold & Scarlet": 
        echo "<br>Gryffindor!<br> ";
      break;
      case "Bronze & Blue": 
        echo "<br>Ravenclaw!<br> ";
      break;
      case "Black & Yellow": 
        echo "<br>Hufflepuff!<br> ";
      break;
    }
  } 
?>

<br><hr><br>
<?php
  // simple factorial to demo loops and function
  function factorial($x) {
    $temp = 1;
    for ($i = 2; $i <= $x; $i++) {
      $temp = $temp * $i;
    }
    return $temp;
  }
  unset($a);
  $a = 5;
  echo factorial($a);

  // constant demo
  echo "<hr><br>constant demo<br>";
  define("CSC", "Computer Science");
  echo CSC."<br>";
  const PI = 3.14;
  echo PI."<br>";

  echo "<br><hr><br>";

  // class and object demo
  echo "class and object <br>";

  class Course {
    public $major;
    public $number;

    public function __construct($major, $number) {
      $this -> major = $major;
      $this -> number = $number;
    }

    public function message() {
      return "This course is ".$this -> major." ".$this -> number."<br>";
    }
  }

  $myCourse = new Course("CSC", 372);
  echo $myCourse -> message();
  echo "<br>";


?>

</html>
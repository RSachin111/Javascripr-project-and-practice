try {
    // Code that might throw an exception
    var result = someUndefinedVariable * 2;
    console.log("Result:", result); // This line won't be reached due to the exception
  } catch (error) {
    // Code to handle the exception
    console.error("An error occurred:", error.message);
  } finally {
    // Code that will be executed regardless of whether an exception was thrown
    console.log("This code will always run.");
  }
  
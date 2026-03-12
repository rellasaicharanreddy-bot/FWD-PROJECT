import java.util.Scanner;

public class SmartLibrarySystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String[][] books = {
                {"Java Programming", "Data Structures", "Operating Systems"},
                {"Computer Networks", "Database Systems", "Software Engineering"}
        };

        int[][] copies = {
                {5, 4, 3},
                {5, 4, 3}
        };

        int choice;

        do {
            System.out.println("\nSMART LIBRARY SYSTEM");
            System.out.println("1. View Books");
            System.out.println("2. Issue Book");
            System.out.println("3. Return Book");
            System.out.println("4. Exit");

            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {

                case 1:
                    for (int i = 0; i < books.length; i++) {
                        System.out.println("Rack " + (i + 1));
                        for (int j = 0; j < books[i].length; j++) {
                            System.out.println("Row " + (j + 1) + " : " +
                                    books[i][j] + " | Copies: " + copies[i][j]);
                        }
                    }
                    break;

                case 2:
                    System.out.print("Scan Student ID: ");
                    String id = sc.next();

                    System.out.print("Enter Rack Number: ");
                    int r = sc.nextInt() - 1;

                    System.out.print("Enter Row Number: ");
                    int row = sc.nextInt() - 1;

                    if (copies[r][row] > 0) {
                        copies[r][row]--;
                        System.out.println("Book issued to student " + id);
                    } else {
                        System.out.println("Book not available");
                    }
                    break;

                case 3:
                    System.out.print("Scan Student ID: ");
                    id = sc.next();

                    System.out.print("Enter Rack Number: ");
                    r = sc.nextInt() - 1;

                    System.out.print("Enter Row Number: ");
                    row = sc.nextInt() - 1;

                    copies[r][row]++;
                    System.out.println("Book returned by student " + id);
                    break;

                case 4:
                    System.out.println("System Closed");
                    break;

                default:
                    System.out.println("Invalid choice");
            }

        } while (choice != 4);

        sc.close();
    }
}
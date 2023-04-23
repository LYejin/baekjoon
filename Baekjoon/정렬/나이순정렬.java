import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

class User implements Comparable<User> {
	public int age;
	public String name;

	public User(int age, String name) {
		this.age = age;
		this.name = name;
	}

	@Override
	public int compareTo(User user) {
		if (user.age < age) {
			return 1;
		} else if (user.age > age) {
			return -1;
		}
		return 0;
	}

	public String toString() {
		return this.age + " " + this.name;
	}
}

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		ArrayList<User> list = new ArrayList<>();

		for (int i = 0; i < n; i++) {
			String[] str = br.readLine().split(" ");
			list.add(new User(Integer.parseInt(str[0]), str[1]));
		}

		list.sort(Comparator.naturalOrder());
		Collections.sort(list);
		
		for (User user : list) {
			System.out.println(user);
		}

	}
}

import java.util.Scanner;

class Main {
	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		String strNumber = sc.next();
		sc.close();
		int sum = 0;

		for (int i = 0; i < N; i++) {
			sum += strNumber.charAt(i) - 48; // 아스키 코드의 값이 반환되기 때문에 '0' 또는 48을 빼줘야 한다.
			// '0'의 아스키코드는 10진수로 48이다. 숫자 10진수 0부터 시작하기 때문에 48이나 '0'을 빼줘야한다.
			// enter = 13, 숫자 0 = 48, 대문자 A = 65, 소문자 a = 97
			// int 형과 char형에 + 혹은 - 연산자를 사용하면 char형이 int 형으로 변환되어 계산되게 된다.
		}

		System.out.println(sum);
	}
}   


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class Main {
    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine().toUpperCase();
        
        int[] count = new int[26];
        
        for (int i = 0; i < str.length(); i++) {
            int num = str.charAt(i) - 'A'; // 배열 index 값 입력을 위한 'A'를 빼준다.
            count[num]++;
        }
        
        int max = 0;
        char answer = '?';
        for (int i = 0; i < count.length; i++) {
            if (max < count[i]) {
                max = count[i];
                answer = (char) (i + 'A'); // 다시 원상복구를 시켜주기 위해 + 'A'를 한다.
            } else if (max == count[i]) {
                answer = '?';
            }
        }
        System.out.println(answer);
	}
}   
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void solve() {
    int t;
    cin >> t;
    vector<int> results;

    while (t--) {
        int p1, p2, p3;
        cin >> p1 >> p2 >> p3;

        if ((p1 + p2 + p3) % 2 != 0) {
            results.push_back(-1);
            continue;
        }

        int total_points = p1 + p2 + p3;
        int total_games = total_points / 2;

        // Check feasibility
        if (p3 > p1 + p2) {
            results.push_back(-1);
            continue;
        }

        results.push_back(total_games);
    }

    for (int result : results) {
        cout << result << endl;
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(0);
    solve();
    return 0;
}

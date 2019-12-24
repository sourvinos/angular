export class VoteComponent {

    totalVotes: number = 0

    upVote() {
        this.totalVotes += 1
    }

    downVote() {
        this.totalVotes -= 1
    }

}
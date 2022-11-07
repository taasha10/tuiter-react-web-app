function WhoToFollowListItem(who) {
   return(`<li class="list-group-item">
                <div class="d-flex flex-row align-items-center">
                    <img class="rounded-circle" height="48px" src="../../images/${who.avatarIcon}"
                         width="48px" alt="icon">
                    <div class="flex-fill ps-1">
                        <span class="fw-bold">${who.userName}
                        <i class="fa fa-check-circle"></i>
                        </span>
                        <br>
                        <span class="text-muted">${who.handle}</span>
                    </div>
                    <button class="btn btn-primary btn-sm rounded-pill" type="button">Follow
                    </button>
                </div>

            </li>`)
}

export default WhoToFollowListItem;





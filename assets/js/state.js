Enjine.GameStateContext = function (defaultState) {
    this.State = null;
    if (defaultState != null) {
        this.State = defaultState;
        this.State.Enter();
    }
};

Enjine.GameStateContext.prototype = {
    ChangeState: function (newState) {
        if (this.State != null) {
            this.State.Exit();
        }
        this.State = newState;
        this.State.Enter();
    },
    Update: function (delta) {
        this.State.CheckForChange(this);
        this.State.Update(delta);
    },
    Draw: function (delta) {
        this.State.Draw(delta);
    }
};

Enjine.GameState = function () {}
Enjine.GameState.prototype = {
    Enter: function () {},
    Exit: function () {},
    Update: function (delta) {},
    Draw: function (context) {},
    CheckForChange: function (context) {}
};
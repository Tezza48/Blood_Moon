#pragma strict

private var moon : Transform;
private var player : Transform;
private var rigid : Rigidbody2D;
//
private var gravityPos : Vector3 = new Vector3();
//
private var isAggro : boolean = false;
//
private var moveSpeed : float = 8f;
private var tTimeIdle : float;
private var idleWait : float = 0.5f;
private var moveVector : Vector2 = new Vector2();

function Start () {
	moon = GameObject.FindGameObjectWithTag("Moon").GetComponent.<Transform>();
	player = GameObject.FindGameObjectWithTag("Player").GetComponent.<Transform>();
	rigid = GetComponent.<Rigidbody2D>();
}

function Update () {
	ApplyGravity();
	// ApplyRotation();
	
	if (isAggro) {
		moveVector = MoveTowardsPlayer();
	} else {
		if (tTimeIdle <= Time.time) {
			MoveIdle();
			tTimeIdle = Time.time + Random.Range(0f, idleWait);
		}
	}
	
}

function ApplyGravity () {
	gravityPos = moon.position - transform.position;
	rigid.AddForce(gravityPos.normalized * GameController.gravity);
}

function ApplyRotation () {
	transform.rotation.z = 180 - Mathf.Asin(gravityPos.y / gravityPos.x);
}

function MoveTowardsPlayer () : Vector2 {
	// move radially around the moon towards the player by the shortest route
	// find which direction is shortest
	// return the vector to move in
}

function MoveIdle () {
	// add a force tangential to the surface of the moon with a random force between two constants
}
#pragma strict

private var gravityPos : Vector3;
private var moon : Transform;
private var moveSpeed : float = 10;
private var rigid : Rigidbody2D;

function Start () {
	moon = GameObject.FindGameObjectWithTag("Moon").GetComponent.<Transform>();
	rigid = GetComponent.<Rigidbody2D>();
}

function FixedUpdate () {
	ApplyGravity();
	ApplyRotation();
	
	var moveVector : Vector2 = new Vector2(Input.GetAxis("Horizontal") * moveSpeed, 0);
	
	if (rigid.velocity.magnitude < 10)
		rigid.AddForce(transform.right * (Input.GetAxis("Horizontal") * moveSpeed));
}

function ApplyGravity () {
	gravityPos = moon.position - transform.position;
	rigid.AddForce(gravityPos.normalized * GameController.gravity);
}

function ApplyRotation () {
	var dx : float = moon.position.x - transform.position.x;
	var dy : float = moon.position.y - transform.position.y;
	transform.rotation.z = Mathf.Atan(dy/dx);
}